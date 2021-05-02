import 'package:flutter/cupertino.dart';
import 'package:timer/views/home_page/home_page.dart';
import 'package:timer/views/test_page/test_page.dart';

Map<String, Widget Function(BuildContext)> routes = {
  '/': (context) => MyHomePage(),
  '/test': (context) => TestHomePage(title: 'Flutter Demo Test Page')
};
