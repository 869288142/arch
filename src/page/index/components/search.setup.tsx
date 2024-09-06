import { ref } from "vue";

const { searchTitle = "hello" } = defineProps<{
  searchTitle: string;
}>();
const searchInnerVar = ref("searchInnerVar");
const model = defineModel<string>();
defineExpose({
  searchInnerVar,
});


function handleInput(event : Event) {
  model.value = (event.target as HTMLInputElement).value
}

export default () => {
  return (<><span>{ searchTitle }</span>
  <input
    value={model.value}
    onInput={handleInput}
  /></>)
}
