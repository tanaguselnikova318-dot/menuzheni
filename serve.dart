import 'dart:io';

void main() async {
  final root = Platform.script.toFilePath().replaceAll('serve.dart', '');
  final server = await HttpServer.bind('localhost', 3000);
  print('Serving on http://localhost:3000');
  await for (final req in server) {
    final path = req.uri.path == '/' ? 'index.html' : req.uri.path.substring(1);
    final file = File('$root$path');
    if (await file.exists()) {
      final ext = path.split('.').last;
      final ct = switch (ext) {
        'html' => ContentType.html,
        'css'  => ContentType('text', 'css', charset: 'utf-8'),
        'js'   => ContentType('application', 'javascript', charset: 'utf-8'),
        _      => ContentType.text,
      };
      req.response.headers.contentType = ct;
      await file.openRead().pipe(req.response);
    } else {
      req.response.statusCode = 404;
      await req.response.close();
    }
  }
}
