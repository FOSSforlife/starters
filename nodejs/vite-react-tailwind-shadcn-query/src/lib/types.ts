interface Operator {
  category: string;
  aliases: Array<string>;
  description: string;
  domain: 'all' | 'audio' | 'matrix';
}
