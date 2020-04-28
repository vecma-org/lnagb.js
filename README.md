lnagb.js
========

[www]: https://vecma-org.github.io/lnagb.js/
[src]: ./src/
[lic]: ./LICENSE

[**Source code**][src] &mdash; [**Website**][www] &mdash;
[**Documentation**][docs] &mdash; [**Learning Area**][learn] &mdash;
[**Lab**][lab] &mdash; [**License**][lic]

This repository contains Linear Algebra operations implemented in JavaScript,
such as adding vectors, reducing matrices, matrix transformations, etc. APIs are
named similarly to those of matrix classes in [three.js](https://threejs.org).

**lnagb.js** evolves as I ([@you-create][gh yc]) learn Linear Algebra. There was
a similar project that I worked on called [**pylnagb**][gh pylnagb], but I've
decided to let it sit in the corner of my garage (for now) because I'm currently
not so used to using Python.

**lnagb.js** is meant to be educational. I've learned a lot from coding it and I
will continue to work on it. If you are learning Linear Algebra, I suggest
writing the math in the form of code as well, and you will learn a lot too.

[gh yc]: https://github.com/you-create
[gh pylnagb]: https://github.com/vecma-org/pylnagb

:point_right: First steps
-------------------------

1. Clone the repository or [download the source code][dl].

```bash
git clone https://github.com/vecma-org/lnagb.js.git
```

[dl]: https://github.com/vecma-org/lnagb.js/archive/master.zip

2. Move into the cloned repository.

```bash
cd lnagb.js
```

3. Install Node dependencies.

```bash
npm install
```

4. Build lnagb.js.

```bash
npm run build
```

Doing this will build the lnagb.js library which comes in 2 formats - UMD and
ESM - in the `build` directory. More specifically:

- `build/lnagb.js` uses the UMD format. This is the file which you can load
  using the `<script>` tag in HTML. If you load lnagb.js this way, all of its
  classes, variables, and functions will reside under the namespace `lnagbjs`.
- `build/lnagb.module.js` uses the ESM format. This is the file which you can
  load using the JavaScript's `import` statement.

5. Use lnagb.js.

Here's a little template for you.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>lnagb.js demo</title>
    </head>
    <body>
        <script src="build/lnagb.js"></script>
        <script>
            let matrix = new lnagbjs.IdentityMatrix( 3 );

            matrix.elements.forEach( function ( element ) {

                console.log( element );

            } );
        </script>
    </body>
</html>
```

Here's the same code but lnagb.js is loaded as a JavaScript module.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>lnagb.js demo</title>
    </head>
    <body>
        <script type="module">
            import * as lnagbjs from './build/lnagb.module.js';

            let matrix = new lnagbjs.IdentityMatrix( 3 );

            matrix.elements.forEach( function ( element ) {

                console.log( element );

            } );
        </script>
    </body>
</html>
```

Be sure to [read the docs][docs] to know how to use lnagb.js. :wink:

:information_source: More information
-------------------------------------

- [**Browse the docs**][docs]
- [**Learn Linear Algebra**][learn] (work in progress, not yet available)

[docs]: https://vecma-org.github.io/lnagb.js/docs/
[learn]: https://vecma-org.github.io/lnagb.js/learn/
[lab]: https://vecma-org.github.io/lnagb.js/lab/

:pushpin: TODO
--------------

See the [Projects][gh projects] for detailed progression.

[gh projects]: https://github.com/vecma-org/lnagb.js/projects

### Code

- [ ] `LinearEquation`
- [ ] `SystemOfLinearEquation`
- [ ] `Vector`
- [x] `Matrix`
- [x] `ZeroMatrix` (as a separate class)
- [x] `IdentityMatrix` (as a separate class)
- [x] `AugmentedMatrix`

### Production

- [x] Create build scripts
- [x] Create a build script for documentation

### Website

- [x] Make a dedicated website
- [ ] Automate page listing and linking in the website
- [ ] Lab 2.0
- [ ] Initiate the Learning Area

:page_with_curl: License
------------------------

Everything (except for the exceptions noted below) is licensed under
[The Unlicense](https://unlicense.org/). Basically, you can do
anything with it, and taking credits is not compulsory.

### Exceptions

- `LICENSE`: This is the copy of The Unlicense itself
- The logo: The logo of lnagb.js and its variants are not licensed
