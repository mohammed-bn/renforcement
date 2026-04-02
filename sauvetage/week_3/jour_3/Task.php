<?php 

class Task{
    private $id;
    private $description;
    private $estimatedHours;

    public function __construct($name, $hours, $assignedTo){
        $this->name = $name;
        $this->hours = $hours;
        $this->assignedTo = $assignedTo;
    }

    public function getId(){
        return $this->id;
    }

    
    public function getDescription(){
        return $this->description;
    }

    
    public function getEstimatedHours(){
        return $this->estimatedHours;
    }

    public function isBig($threshold){
        return $this->hours > $threshold;
    }
}

