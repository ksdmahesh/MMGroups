import 'package:flutter/material.dart';
import 'package:timer/config/config.dart';
import 'package:timer/routes/routes.dart';
import 'package:timer/themes/themes.dart';

void main() {
  runApp(InitializeComponent());
}

class InitializeComponent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '${config["appTitle"]}',
      theme: theme,
      darkTheme: darkTheme,
      highContrastTheme: highContrastTheme,
      highContrastDarkTheme: highContrastDarkTheme,
      initialRoute: '/',
      routes: routes,
      themeMode: ThemeMode.system,
    );
  }
}
