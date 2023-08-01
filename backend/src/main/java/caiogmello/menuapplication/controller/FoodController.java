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

    @CrossOrigin(origins = "*")
    @PostMapping
    public void postFood(@RequestBody FoodRequestDTO data) {
        Food foodData = new Food(data);
        repository.save(foodData);
    }

    @PutMapping("{id}")
    public void updateFood(@PathVariable Long id, @RequestBody FoodRequestDTO data) {
        Food food =  repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Food not exist with id: " + id));

        food.setTitle(data.title());
        food.setImage(data.image());
        food.setPrice(data.price());

        repository.save(food);
    }

    @CrossOrigin(origins = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}
