<?php
class Project{
    private $title;
    private $dailyRate;
    private $tasks = [];

    public function __construct($title, $dailyRate){
        $this->title = $title;
        $this->dailyRate = $dailyRate;
    }

    public function addTask(Task $task){
        $this->tasks[] = $task;
    }

    public function calculateTotalHours(){
        $total = 0;
        foreach ($this->$tasks as $value) {
            $total += $value->getHours();
        }
        return $total;
    }


    public function calculateTotalWithBuffer($bufferPercent = 10){

        $total = $this->calculateTotalHours();
        $buffer = ($total * $bufferPercent) / 100;
        $totalWithBuffer = $total + $buffer;

        return $totalWithBuffer;
    }

    public function calculateBudget($bufferPercent = 10){
        $totalWithBuffer = $this->calculateTotalWithBuffer($bufferPercent);
        return $totalWithBuffer * ($this->dailyRate / 8);
    }



    public function getBigTasks($tasks, $threshold){
        $bigTasks = [];

        foreach ($this->$tasks as $task) {
            if ($task->isBig($threshold)) {
                $bigTasks[] = $task;
            }
        }
        return $bigTasks;
    }

}



