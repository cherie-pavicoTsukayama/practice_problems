function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row);
}
//nCols = the cols in the theater
//nRows = the total Rows in the theater
//col = the col im sitting in
//row = the row im sitting in

//nCols = 16
//nRow = 11
//col = 5
//row = 3

//Subtract the total rows from my row - 1  and store it in a variable
//Subtracvt the total cols from my col and store it in a variable
//return the prodcut of multiplying the vairables
