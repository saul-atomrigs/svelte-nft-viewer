module.exports = {
	// 코드 마지막에 세미콜론이 있게 formatting
	semi: true,

	// 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략하게 formatting
	arrowParens: 'avoid',

	// 개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
	// (windows에 뜨는 'Delete cr' 에러 해결)
	endOfLine: 'auto',

	// 객체 리터럴의 중괄호 내부에 공백을 포함할 것인지 여부 (예시: { foo: bar })
	bracketSpacing: true,

	useTabs: false,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 80,
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
