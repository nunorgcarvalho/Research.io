function wordCounter(string) {
	var words = string.split(" ").length;
	return words;
}
function charCounter(string) {
	var chars = string.length;
	return chars;
}
function charNoSpaceCounter(string) {
	var string_ns = string.replace(" ","");
	return charNoSpaceCounter;
}
function sentenceCounter (string) {
	var periods = string.split(".").length - 1;
	var questions = string.split("?").length - 1;
	var exclamations = string.split("!").length - 1;
	var sentences = periods + questions + exclamations;
	return sentences;
}
function paragraphCounter (string) {
	var paragraphs = string.split("\n").length - 1;
	return paragraphs;
}