package main

import (
	"fmt"
	"math"
	"time"
)

const s = "someconst bullshit"

func writeNumAsString(n int) {
	var str = ""

	switch n {
	case 0:
		str = "zero"
	case 1, 2:
		str = "ont or two"
	case 3:
		str = "three"
	default:
		str = "is"
	}

	fmt.Println("write ", n, " as ", str)
}

func testArrays() {
	var a [5]int
	fmt.Println("somearray", a)

	a[3] = 100
	fmt.Println("set", a)
	fmt.Println("get", a[3])
	fmt.Println("len", len(a))

	b := [5]int{0, 1, 2, 3, 4}
	fmt.Println("arrray b defined by initialising declaration", b)

	var arr2d [2][3]int
	for i := 0; i < len(arr2d); i++ {
		for j := 0; j < len(arr2d[0]); j++ {
			arr2d[i][j] = i + j
		}
	}

	fmt.Println("2d array", arr2d)
}

func linearSearch(a int, arr [5]int) int {
	for i := 0; i < 5; i++ {
		if arr[i] == a {
			return i
		}
	}

	return -1
}

func main() {
	fmt.Println(s)
	const n = 128
	const d = 3e20 / n
	fmt.Println(d)
	fmt.Println(int64(d))
	fmt.Println(math.Sin(n))

	fmt.Println("=================")
	fmt.Println(math.Pi)
	var pi float32 = math.Pi
	fmt.Println(int64(pi))
	fmt.Println("=================")

	for i := 0; i < 10; i++ {
		writeNumAsString(i)
		if i == 5 {
			break
		}
	}

	isItWeekendOrNah := func(timeVal time.Time) {
		switch timeVal.Weekday() {
		case time.Saturday, time.Sunday:
			fmt.Println("It's weekend")
		default:
			fmt.Println("Nah, it's weekday")
		}
	}

	isItBeforeNoonOrNah := func(timeVal time.Time) {
		switch {
		case timeVal.Hour() < 12:
			fmt.Println("It's before noon.")
		default:
			fmt.Println("Nah, it's afternoon!")
		}
	}

	printType := func(i interface{}) {
		fmt.Println("Type for ", i)
		switch t := i.(type) {
		case bool:
			fmt.Println("It's bool")
		case int:
			fmt.Println("It's an int")
		default:
			fmt.Printf("uncovered type for %T\n", t)
		}
	}

	fmt.Println("Today is", time.Now().Weekday())

	fmt.Println("Is it a weekend or no?")
	isItWeekendOrNah(time.Now())
	fmt.Println("Is it before noon or no?")
	isItBeforeNoonOrNah(time.Now())

	printType(true)
	printType(1)
	printType("someshit")
	printType(time.Sunday)

	fmt.Println("=-=-=-=-=-=-=-=-=-=-=")

	testArrays()

	arr := [5]int{1, 2, 5, 4, 3}
	var idx int = linearSearch(3, arr)

	fmt.Println("found element 3 at", idx)
}
