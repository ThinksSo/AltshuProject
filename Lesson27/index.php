<!DOCTYPE html>
<html>

<body>
    <h1>
        <?php
        echo "Lesson 27";
        ?>
    </h1>

    <h2>
        <?php
        echo ("Task 4.1: My programming languages");
        ?>
    </h2>

    <p>
        <?php
        $progLang = ['PHP', 'JavaScript', 'Python', 'C#'];

        echo ('<ul>');
        for ($i = 0; $i < count($progLang); $i++) {
            echo ('<li>');
            echo ($progLang[$i]);
            echo ('</li>');
        }
        echo ('</ul>');
        ?>
    </p>

    <h2>
        <?php
        echo ("Task 4.2: List of students");
        ?>
    </h2>

    <p>
        <?php
        $students = ['Antipova', 'Tatarinova', 'Romanov', 'Red', 'Zubrilina'];

        echo ('<ol>');
        for ($i = 0; $i < count($students); $i++) {
            echo ('<li>');
            echo ($students[$i]);
            echo ('</li>');
        }
        echo ('</ol>');
        ?>
    </p>

    <h2>
        <?php
        echo ("Task 4.3: Variables");
        ?>
    </h2>

    <p>
        <?php
        $numA = 3;
        $numB = 5;
        $sum = $numA + $numB;
        $mult = $numA * $numB;
        echo ($numA . '+' . $numB . '=' . $sum . '</br>');
        echo ($numA . '*' . $numB . '=' . $mult . '</br>');
        echo ($mult +  $numA . '*' . $numB . '=' . $mult . '</br>');
        $numA *= 3;
        echo ($numA . '</br>');
        echo ($numB + "15" . '</br>');
        var_dump($sum);
        var_dump($mult);
        ?>
    </p>


    <h2>
        <?php
        echo ("Task 4.4: Change variables");
        ?>
    </h2>

    <p>
        <?php
        $first = 1;
        $second = 2;
        echo ('first = ' . $first . '; ' . 'second = ' . $second . '</br>');

        list($first, $second) = [$second, $first];
        echo ('first = ' . $first . '; ' . 'second = ' . $second);
        ?>
    </p>


    <h2>
        <?php
        echo ("Task 4.5: Checking for even");
        ?>
    </h2>

    <p>
        <?php
        function ifEven($num)
        {
            echo ($num % 2 ? $num . ' - Odd' . '</br>' : $num . ' - Even' . '</br>');
        }

        ifEven(8);
        ifEven(9);

        ?>
    </p>


    <h2>
        <?php
        echo ("Task 4.6: Array x3");
        ?>
    </h2>

    <p>
        <?php
        $arrayX3 = ['a', 'b', 'c', 'd', ['e', ['f', 'g']], 'h'];
        var_dump($arrayX3);
        echo ('</br>');
        var_dump($arrayX3[4][1][1]);
        echo ('</br>');

        $arrayX3[4][1][2] = 'f1';
        $arrayX3[4][1][3] = 'g1';
        var_dump($arrayX3);
        ?>
    </p>


    <h2>
        <?php
        echo ('Task 4.7');
        ?>
    </h2>

    <p>
        /* С помощью цикла while создайте массив, содержащий чётные числа от 245 до 287.
        Затем выведите элементы массива с помощью цикла foreach
        */

        <?php
        $elem = 245;
        $numbers = [];
        while ($elem < 287) {
            $elem++;
            if ($elem % 2 != 0) {
                continue;
            }
            $numbers[] = $elem;
        }
        //var_dump($numbers);

        echo ('<ul>');
        foreach ($numbers as $i  => $value) {
            echo ('<li>');
            echo ($value);
            echo ('</li>');
        }
        echo ('</ul>');


        ?>
    </p>
</body>

</html>