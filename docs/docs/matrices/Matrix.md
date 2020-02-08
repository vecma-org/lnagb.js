<a name="Matrix"></a>

## Matrix
Class for matrices in Linear Algebra (excluding augmented matrices).

A matrix is a set of numbers arranged in rows and columns.

**Kind**: global class  

* [Matrix](#Matrix)
    * [new Matrix(row, column)](#new_Matrix_new)
    * _instance_
        * [.copy(m)](#Matrix+copy)
        * [.clone()](#Matrix+clone) ⇒ <code>object</code>
        * [.numberOfElements()](#Matrix+numberOfElements) ⇒ <code>number</code>
        * [.sameSize(m)](#Matrix+sameSize) ⇒ <code>boolean</code>
        * [.equals(m)](#Matrix+equals) ⇒ <code>boolean</code>
        * [.element(r, c)](#Matrix+element) ⇒ <code>number</code>
        * [.elementIndex(r, c)](#Matrix+elementIndex) ⇒ <code>number</code>
        * [.row(r)](#Matrix+row) ⇒ <code>object</code>
        * [.column(c)](#Matrix+column) ⇒ <code>object</code>
        * [.diagonal(r, c)](#Matrix+diagonal) ⇒ <code>object</code>
        * [.mainDiagonal()](#Matrix+mainDiagonal) ⇒ <code>object</code>
        * [.sizeSwap()](#Matrix+sizeSwap)
        * [.interchargeRows(r, s)](#Matrix+interchargeRows) ⇒ <code>object</code>
        * [.multiplyRowByScalar(r, a)](#Matrix+multiplyRowByScalar) ⇒ <code>object</code>
        * [.addRowTimesScalarToRow(r, s, a)](#Matrix+addRowTimesScalarToRow) ⇒ <code>object</code>
        * [.transpose()](#Matrix+transpose)
        * [.multiplyScalar(s)](#Matrix+multiplyScalar) ⇒ <code>object</code>
        * [.negate()](#Matrix+negate) ⇒ <code>object</code>
        * [.add(matrix)](#Matrix+add) ⇒ <code>object</code>
        * [.subtract(m)](#Matrix+subtract) ⇒ <code>object</code>
        * [.multiply(m)](#Matrix+multiply) ⇒ <code>object</code>
        * [.premultiply(m)](#Matrix+premultiply) ⇒ <code>object</code>
    * _static_
        * [.isMatrix(o)](#Matrix.isMatrix) ⇒ <code>boolean</code>
        * [.ZeroMatrix(row, column)](#Matrix.ZeroMatrix) ⇒ <code>object</code>
        * [.IdentityMatrix(size)](#Matrix.IdentityMatrix) ⇒ <code>object</code>
        * [.multiplyMatrices(m, n)](#Matrix.multiplyMatrices) ⇒ <code>object</code>

<a name="new_Matrix_new"></a>

### new Matrix(row, column)
Constructs a new `Matrix` instance.

The first 2 parameters set the size of the matrix, the rest of the
parameters are perceived as elements of the new matrix given in
**row-major** order. Only the first 2 parameters are required.


| Param | Type | Description |
| --- | --- | --- |
| row | <code>number</code> | The number of rows for the new matrix |
| column | <code>number</code> | The number of columns for the new matrix |

<a name="Matrix+copy"></a>

### matrix.copy(m)
Makes this matrix the same as matrix *m*.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The `Matrix` instance to copy from |

<a name="Matrix+clone"></a>

### matrix.clone() ⇒ <code>object</code>
Creates and returns a clone of this matrix instance.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - A clone of this matrix  
<a name="Matrix+numberOfElements"></a>

### matrix.numberOfElements() ⇒ <code>number</code>
Computes and returns the number of elements in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The number of elements in this matrix  
<a name="Matrix+sameSize"></a>

### matrix.sameSize(m) ⇒ <code>boolean</code>
Checks if this matrix has the same size as *m*.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if the two matrices have the same size, `false`
otherwise  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The matrix to check the size of this matrix against |

<a name="Matrix+equals"></a>

### matrix.equals(m) ⇒ <code>boolean</code>
Checks if this matrix and the given matrix *m* are equal.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if the two matrices are the same, `false`
otherwise  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The matrix to compare this matrix to |

<a name="Matrix+element"></a>

### matrix.element(r, c) ⇒ <code>number</code>
Returns the element in row *r* and column *c* in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The element in row *r* and column *c*  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row that contains the element (1-indexed) |
| c | <code>number</code> | The column that contains the element (1-indexed) |

<a name="Matrix+elementIndex"></a>

### matrix.elementIndex(r, c) ⇒ <code>number</code>
Returns the 0-indexed position of the element in row *r* and column *c*
within `.elements`.

If *r* and *c* are not within the dimensions of this matrix, returns -1.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The position of the element in `.elements` (0-indexed)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row that contains the element (1-indexed) |
| c | <code>number</code> | The column that contains the element (1-indexed) |

<a name="Matrix+row"></a>

### matrix.row(r) ⇒ <code>object</code>
Returns a row in this matrix as a JavaScript array.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - The array that contains the elements in the row  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The position of the row (1-indexed) |

<a name="Matrix+column"></a>

### matrix.column(c) ⇒ <code>object</code>
Returns a column in this matrix as a JavaScript array.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - The array that contains the elements in the column  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | The position of the column (1-indexed) |

<a name="Matrix+diagonal"></a>

### matrix.diagonal(r, c) ⇒ <code>object</code>
Returns the diagonal in this matrix that contains the element in row *r*
and column *c*.

If *r* and *c* are not within the dimensions of this matrix, returns an
empty array.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - The diagonal (as an array) that contains the element  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row that contains the element (1-indexed) |
| c | <code>number</code> | The column that contains the element (1-indexed) |

<a name="Matrix+mainDiagonal"></a>

### matrix.mainDiagonal() ⇒ <code>object</code>
Returns the main diagonal of this matrix.

The main diagonal of a matrix is the diagonal that contains the element
at row 1 and column 1 of that matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - The main diagonal (as an array) of this matrix  
<a name="Matrix+sizeSwap"></a>

### matrix.sizeSwap()
Swaps the values of `.size.row` and `.size.column` in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
<a name="Matrix+interchargeRows"></a>

### matrix.interchargeRows(r, s) ⇒ <code>object</code>
Intercharges row *r* with row *s* in place and returns this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row to intercharge with *s* (1-indexed) |
| s | <code>number</code> | The row to intercharge with *r* (1-indexed) |

<a name="Matrix+multiplyRowByScalar"></a>

### matrix.multiplyRowByScalar(r, a) ⇒ <code>object</code>
Multiplies row *r* by a non-zero scalar *a* in place and returns this
matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row to multiply the scalar by (1-indexed) |
| a | <code>number</code> | The scalar to multiply the row by |

<a name="Matrix+addRowTimesScalarToRow"></a>

### matrix.addRowTimesScalarToRow(r, s, a) ⇒ <code>object</code>
Adds *a* times row *s* to row *r* in place and returns this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| r | <code>number</code> |  | The row that gets added (1-indexed) |
| s | <code>number</code> |  | The row to multiply the scalar by and then add to row *r* |
| a | <code>number</code> | <code>1</code> | The scalar to multiply row *s* by |

<a name="Matrix+transpose"></a>

### matrix.transpose()
Transposes this matrix in place and returns this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
<a name="Matrix+multiplyScalar"></a>

### matrix.multiplyScalar(s) ⇒ <code>object</code>
Multiplies this matrix by scalar *s* and returns this matrix.

Multiplying a matrix by a scalar means multiplying every element in that
matrix by the scalar.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The scalar to multiply this matrix by |

<a name="Matrix+negate"></a>

### matrix.negate() ⇒ <code>object</code>
Multiplies this matrix by -1 and returns this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  
<a name="Matrix+add"></a>

### matrix.add(matrix) ⇒ <code>object</code>
Adds *m* to this matrix and returns this matrix

If this matrix and *m* aren't of the same size, perform no addition.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>object</code> | The matrix to add to this matrix |

<a name="Matrix+subtract"></a>

### matrix.subtract(m) ⇒ <code>object</code>
Substracts *m* from this matrix and returns this matrix.

If this matrix and *m* aren't of the same size, perform no substraction.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The matrix to subtract this matrix to |

<a name="Matrix+multiply"></a>

### matrix.multiply(m) ⇒ <code>object</code>
Post-multiplies this matrix by *m* and returns this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The matrix to post-multiply this matrix to |

<a name="Matrix+premultiply"></a>

### matrix.premultiply(m) ⇒ <code>object</code>
Pre-multiplies this matrix by *m* and returns this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The matrix to pre-multiply this matrix to |

<a name="Matrix.isMatrix"></a>

### Matrix.isMatrix(o) ⇒ <code>boolean</code>
Checks if object *o* is a valid `Matrix` instance and return `true`
if it is.

Note that methods inside the `Matrix` class do not check if their
parameters are valid (including matrices).

Criteria for being "valid":
- The constructor is `Matrix`
- Has the `name` property
- Has the `size` property that has
    - the `row` property being a positive integer
    - the `column` property also being a positive integer
- Has the `elements` property and it is a JavaScript array of numbers
  and the number of elements must equal to the product of `.size.row` and
  `.size.column`

**Kind**: static method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if *o* is a `Matrix` instance, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

<a name="Matrix.ZeroMatrix"></a>

### Matrix.ZeroMatrix(row, column) ⇒ <code>object</code>
Creates and returns a zero matrix.

A zero matrix is a matrix with all of its elements being 0.

**Kind**: static method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - A Matrix instance that represents the desired matrix  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>number</code> | The number of rows for the zero matrix |
| column | <code>number</code> | The number of columns for the zero matrix |

<a name="Matrix.IdentityMatrix"></a>

### Matrix.IdentityMatrix(size) ⇒ <code>object</code>
Creates and returns an identity matrix.

An identity matrix is a square matrix where the elements on its main
diagonal are all 1 and the rest are all 0.

**Kind**: static method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - A Matrix instance that represents the desired matrix  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | The size of the identity matrix |

<a name="Matrix.multiplyMatrices"></a>

### Matrix.multiplyMatrices(m, n) ⇒ <code>object</code>
Multiplies matrices *m* and *n* in that order and returns the result.

Multiplying 2 matrices require that the number of columns in the matrix
on the left must equal to the number of rows in the matrix on the right.
If *m* and *n* are not valid for their multiplication, return a clone of
*m*.

**Kind**: static method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>object</code> - The result of the multiplication  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The matrix on the left of the multiplication |
| n | <code>object</code> | The matrix on the right of the multiplication |
