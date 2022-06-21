import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeituraTarefaComponent } from './leitura-tarefa.component';

describe('LeituraTarefaComponent', () => {
  let component: LeituraTarefaComponent;
  let fixture: ComponentFixture<LeituraTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeituraTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeituraTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
