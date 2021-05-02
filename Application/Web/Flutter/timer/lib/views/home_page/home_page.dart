import 'package:flutter/material.dart';
import 'package:timer/views/shared/get-scaffold.dart';
import 'package:timer/data/home_page_json.dart';
import 'package:timer/widgets/home_page_widget.dart';

class MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return getScaffold(context, homePage,
        {'_incrementCounter': _incrementCounter, '_counter': _counter});
  }
}
