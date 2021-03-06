Output Socket Menus
*******************

Most of output sockets in Sverchok's nodes have a button to call a dropdown menu:

.. image:: https://user-images.githubusercontent.com/284644/97477490-83e8c100-1971-11eb-982a-ad729dd29ec7.png

These dropdown menu buttons are only shown when **Show socket menus** option in
"Sverchok" subpanel of the N panel of node tree is enabled. By default that
checkbox is not enabled.

Different types of sockets can have different options available in this menu, but most common are:

* Flatten (F)
* Simplify (S)
* Graft (G)
* Graft Topology (G2)
* Unwrap (U)
* Wrap (W)

All these options are intended to manipulate the structure of data generated by
this output, without changing actual numbers. It is possible to make such
manipulations by use of separate nodes from the **List** category, but in many
cases it is much more convenient to just tick a checkbox instead of creating a
separate node. On the other hand, separate nodes can be useful in some cases
too.

Enabled options are displayed near the label of the socket, in square brackets;
for example, if there is a socket named Vertices, and Graft and Wrap options
are enabled for it, it's label will look like ``Vertices [G,W]``.

If several of these options are enabled simultaneously, they will be applied in
the order in which they are listed in the menu.

**NOTE**: if you enable some checkboxes in menus of some sockets, and then
disable the **Show socket menus** checkbox in the N panel, enabled options will
still be applied.

Flatten
-------

If this option is enabled, it flattens all data in this output, from however
deep it's nesting level was, to a simple list (by concatenating all nested
lists). For example, if this output contains ``[[[1], [2], [3,4]]]``, then with
Flatten option checked you will have simply  ``[1, 2, 3, 4]``.

The same effect can be achieved by use of a separate "List Join" node.

Simplify
--------

This option is similar to Flatten, but it leaves minimal nesting. This is
actual, for example, for Vertices sockets - one usually does not want to
concatenate coordinates of different vertices into one big list. For example,
if Vertices socket contains ``[[[1,2,3], [4,5,6]], [[7,8,9], [10,11,12]]]``,
then with this option enabled you will have ``[[1,2,3], [4,5,6], [7,8,9], [10,
11, 12]]``.

Flatten and Simplify options can not be enabled simultaneously.

Graft
-----

If this option is enabled, it puts each atomic object in the output data
(however nested it was) into additionally nested list. Examples:

* If the output contains ``[1, 2, 3, 4]``, then with this option enabled you
  will have ``[[1], [2], [3], [4]]``.
* If the output contains ``[[1, 2], [3,4]]``, then with this option enabled you
  will have ``[[[1], [2]], [[3], [4]]]``.
* For Vertices sockets, this option considers vertices to be "atomic objects",
  so it encloses each vertex into a separate list. For example, if Vertices
  socket contains ``[[0.0, 1.0, 2.0], [3.0, 4.0, 5.0]]``, then with this option
  enabled you will have ``[[[0.0, 1.0, 2.0]], [[3.0, 4.0, 5.0]]]``.

The same effect can be achieved by use of separate "List Split" node with Split
input set to 1.

Graft Topology
--------------

This option is available for Strings outputs only (Edges, Faces and similar).
This is basically the same as Graft, with only difference being that this
option considers lists of nesting level 1 (lists of numbers, for example), as
"atomic objects". So, this option encloses each list of numbers into a separate
list. For example, if Edges output contains ``[[0,1], [2,3], [3,4]]``, then
with this option enabled you will have ``[[[0,1]], [[2, 3]], [[3, 4]]]``.

Unwrap
------

This option removes one pair of square brackets from a nested list, if it is
possible. If output data is empty, or output data is a list with more than one
item, this will raise an exception, and processing will stop. For example, if
the socket contains ``[[1, 2, 3]]``, then with this option enabled you will
have ``[1, 2, 3]``. But, if the socket contains ``[[1, 2], [3, 4]]``, then you
will have an exception.

Wrap
----

This option simply puts the whole output of the socket into a list, to add
another nesting level. For example, if the socket contains ``[[1], [2], [3]]``,
then with this option enabled you will have ``[[[1], [2], [3]]``.

Wrap and Unwrap options can not be enabled simultaneously.

