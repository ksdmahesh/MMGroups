import 'package:flutter/cupertino.dart';
import 'package:timer/screens/test_page.dart';
import 'package:timer/widgets/home_page_widget.dart';

Map<String, Widget Function(BuildContext)> routes = {
  '/': (context) => MyHomePage(),
  '/test': (context) => TestHomePage(title: 'Flutter Demo Test Page')
};