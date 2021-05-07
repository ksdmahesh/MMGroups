import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LeftBar extends StatefulWidget {
  LeftBar({Key? key, this.items}) : super(key: key);

  final Map<String, String>? items;

  @override
  _LeftBar createState() => _LeftBar(this.items ?? {});
}

class _LeftBar extends State<LeftBar> {
  _LeftBar(this.items) : super() {
    _items = List<Widget>.generate(
        this.items.values.length,
        (index) => ListTile(
              title: Text(this.items.values.elementAt(index)),
              onTap: () {
                // Update the state of the app
                // ...
                // Then close the drawer
                Navigator.pop(context);
              },
            ));
  }

  final Map<String, String> items;

  late List<Widget> _items;

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.zero,
      children: [
        DrawerHeader(
          child: Text('Drawer Header'),
          decoration: BoxDecoration(
            color: Colors.blue,
          ),
        ),
        Column(
          children: [
            Container(
              width: double.infinity,
              height: double.maxFinite,
              child: Column(
                children: [
                  ..._items,
                ],
              ),
            ),
            Center(
              child: Column(
                children: <Widget>[
                  Container(
                    color: Colors.blue,
                    height: 100,
                    width: 100,
                  ),
                  Expanded(
                    child: Container(
                      color: Colors.amber,
                      width: 100,
                    ),
                  ),
                  Container(
                    color: Colors.blue,
                    height: 100,
                    width: 100,
                  ),
                ],
              ),
            ),
            Container(
              child: Align(
                alignment: FractionalOffset.bottomCenter,
                child: Column(
                  children: <Widget>[
                    Divider(),
                    ListTile(
                        leading: Icon(Icons.settings), title: Text('Facebook')),
                    ListTile(
                        leading: Icon(Icons.help), title: Text('Instagram'))
                  ],
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}
