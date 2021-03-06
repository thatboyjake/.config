*******
Testing
*******

Preface
=======

This document describes (for developers mainly) our approach to testing the code of Sverchok.

The main ideas are:

* It is better to have good code.
* You do not actually know how good or bad does your code work until you test it.
* It is a good idea to do testing automatically after any change. This will let you know if you your code became better or worse.
* `TDD <https://en.wikipedia.org/wiki/Test-driven_development>`_ is based on some sane ideas.
* But, it is not applied to Sverchok as a dogma, because of:

  * Automated testing has it's price, mainly human resources, which we do not have too much.
  * Some part of Sverchok code is about interacting with user (GUI). Such code can theoretically be tested automatically, but we don't think it worth it price for Sverchok.
* So: write automated tests where they are not too complex, or too heavy, or too fragile. For GUI things, or for complex setups, or for things that take too much code to setup programmatically - just do manual testing.

Implementation
==============

Automated testing of Sverchok is implemented based on standard Python's `unittest <https://docs.python.org/3/library/unittest.html>`_ module. 
In ``sverchok.utils.testing`` module there is a number of utility methods and some base classes for test cases. Please refer to docstrings in that module for more detailed information.
Test cases themselves are under ``tests/`` directory. The files have to be named ``*_tests.py``. Feel free to use existing test cases as examples to create your own.
Test data files are located under ``tests/references/`` directory. There are ``.blend.gz`` and ``.json`` files used as patterns/references for comparison.

Test cases can be run in two ways:

* From running Blender. For this you have to enable "Developer mode" under Sverchok addon preferences. Then in Sverchok's N panel you will see Testing panel and a button "Run all tests" in it. You can observe test results in Sverchok's log.
* From command line. There is script named ``run_tests.sh`` in root directory (this is for bash,  I imagine anyone familiar with Windows's ``cmd.exe`` / Powershell scripting can easily write similar script for Windows). If your blender executable is not available as simple ``blender`` command, you have to pass it in the command line, like ``BLENDER=~/soft/blender-2.79-linux-glibc219-x86_64/blender ./run_tests.sh``.

Please do run the tests at least before making a pull request.

Continuous Integration
======================

GitHub actions are used for executing tests. You can see current status of Sverchok tests 
`here <https://github.com/nortikin/sverchok/actions>`_. 
GitHub action is configured to trigger automatically on the following events:

* Push to the ``master`` branch.
* Creation of the pull request against the ``master`` branch, or a push towards the branch of pull request.

The status of build triggered by pull request is displayed directly in the GitHub interface. If your pull request breaks existing tests, it is not going to be merged in such state. You need to either a) fix your code, or b) update the code of tests themselves, in case the problem is in tests, not in code being tested.

Moreover, it is a good idea to add some automated tests with each pull request. For example, if you added a new feature, add a test for it (in case it is not too hard to write such a test; otherwise just do manual testing).


Testing Documentation
=====================

For building Sverchok docs `Sphinx <https://www.sphinx-doc.org/en/master/index.html>`_ documentation generator is used.
If in a pul request there are changed files located in ``sverchok/docs`` folder it will trigger testing of building
the documentation. Before pushing changes you can build docs on your computer. 
``sphinx-build -b html "path to sverchok/docs" "path to where to build docs"`` command can be used in console.
But before building `Read the Docs <https://sphinx-rtd-theme.readthedocs.io/en/stable/>`_ theme also should be
installed.

In case if the tests were failed on Github you can check the details in the *Files changed* tab of the pul request.

.. image:: https://user-images.githubusercontent.com/28003269/125597392-c3598def-f5d2-4bb5-94ae-ff802820c4a8.png

If there is nothing in the tab then you have to go to the test details and read the log but most likely
you will not face with such fail unless there was changes in the configuration file.
