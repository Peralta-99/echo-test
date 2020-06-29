<?php
function caclulateDeposit()
{
    if (isset($_POST["deposit_start"]) && isset($_POST["deposit_amount"])) {
        $termDeposit = ($_POST["term-deposit"])[0];
        define("percent", 0.1);
        $amount_refill = (int)($_POST["amount_refill"]);
        $currentYear = ((($_POST["deposit_start"])[6] . ($_POST["deposit_start"])[7] . ($_POST["deposit_start"])[8] . ($_POST["deposit_start"])[9]));
        $isLeap = fn ($x) => (date('L', mktime(0, 0, 0, 7, 7, $x)) ? 366 : 365);
        $daysInTheCurrentMonth = function ($x) {
            $depositStart = $_POST["deposit_start"];
            $currentMounth = ((int)($depositStart[3] . $depositStart[4])) + $x;
            if ($currentMounth > 12) return date('t', mktime(0, 0, 0, ($currentMounth - ((int)($depositStart[3] . $depositStart[4])))));
            return date('t', mktime(0, 0, 0, $currentMounth));
        };
        $depositAmount = (int)($_POST["deposit_amount"]);
        $pastMounth = 0;
        $presentMounth = 0;
        $counter = 0;
        while ($counter < $termDeposit) {
            for ($i = 0; $i < 12; $i++) {
                if ($i === 0 && $counter === 0) {
                    $presentMounth = $depositAmount + ((($depositAmount) * $daysInTheCurrentMonth($i) * percent) / $isLeap($currentYear));
                    $pastMounth = $presentMounth + $amount_refill;
                }
//        else if ($i === 11) {
//            $presentMounth = $pastMounth + (($pastMounth) * $daysInTheCurrentMonth($i) * percent)/$isLeap($currentYear);
//            $pastMounth = $presentMounth;
//        }
                else {
                    $presentMounth = $pastMounth + (($pastMounth) * $daysInTheCurrentMonth($i) * percent) / $isLeap($currentYear);
                    $pastMounth = $presentMounth + $amount_refill;
                }
            };
            $counter++;
        }
        return (round(($pastMounth), 2)) . ' руб';
    };
};

$result = caclulateDeposit();
//var_dump($result);
echo json_encode($result, JSON_PRESERVE_ZERO_FRACTION);
?>
