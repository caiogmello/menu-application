package caiogmello.menuapplication.controller;

import caiogmello.menuapplication.controller.food.Food;
import caiogmello.menuapplication.controller.food.FoodRepository;
import caiogmello.menuapplication.controller.food.FoodRequestDTO;
import caiogmello.menuapplication.controller.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "*", allowCredentials = "*")
    @PostMapping
    public void postFood(@RequestBody FoodRequestDTO data) {
        Food foodData = new Food(data);
        repository.save(foodData);
    }

    @CrossOrigin(origins = "*", allowCredentials = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}
