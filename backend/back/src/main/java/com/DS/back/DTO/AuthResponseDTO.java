package com.DS.back.DTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthResponseDTO {
    Long userId;
    String type;
}
