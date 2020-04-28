/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

let MathUtils = {

	/**
	 * Computes and returns the result of the linear combination of 2 sequences
	 * of numbers. The sequences must have the same number of terms.
	 *
	 * This is useful in multiplying matrices.
	 *
	 * @param {object} p First sequence of numbers (as a JS array)
	 * @param {object} q Second sequence of numbers (as a JS array)
	 * @return {number} The result of the linear combination of the two sequences
	 */
	linearCombination: function ( p, q ) {

		return p.reduce( ( result, v, i ) => result + p[ i ] * q[ i ], 0 );

	}

};

export { MathUtils };
