/* MoodShelf sample data. */
window.MSData = (function () {
  const books = [
    { id: 'sh', title: 'The Secret History', author: 'Donna Tartt', status: 'finished', rating: 5, emotions: ['eerie', 'longing', 'wonder'], spice: 'dark academia', note: 'Wanted to be cold and brilliant and doomed.' },
    { id: 'pi', title: 'Piranesi', author: 'Susanna Clarke', status: 'finished', rating: 5, emotions: ['wonder', 'longing'], spice: 'quiet awe', note: 'The Beauty of the House is immeasurable; its Kindness infinite.' },
    { id: 'al', title: 'A Little Life', author: 'Hanya Yanagihara', status: 'finished', rating: 5, emotions: ['heartbreak', 'tender'], spice: 'destroyed me', note: 'Cried on the train. Twice. Same chapter.' },
    { id: 'be', title: 'Beloved', author: 'Toni Morrison', status: 'reading', rating: 0, emotions: ['heartbreak', 'eerie'], spice: 'haunting', note: '' },
    { id: 'cr', title: 'Crying in H Mart', author: 'Michelle Zauner', status: 'finished', rating: 4, emotions: ['tender', 'longing'], spice: 'grief & garlic', note: '' },
    { id: 'no', title: 'Norwegian Wood', author: 'Haruki Murakami', status: 'finished', rating: 4, emotions: ['longing', 'comfort'], spice: 'rain & loss', note: '' },
    { id: 'ci', title: 'Circe', author: 'Madeline Miller', status: 'want', rating: 0, emotions: ['wonder', 'rage'], spice: 'slow burn power', note: '' },
    { id: 'ba', title: 'Bunny', author: 'Mona Awad', status: 'reading', rating: 0, emotions: ['eerie', 'rage'], spice: 'unhinged', note: '' },
    { id: 'pr', title: 'The Price of Salt', author: 'Patricia Highsmith', status: 'want', rating: 0, emotions: ['tender', 'longing'], spice: 'aching', note: '' },
  ];
  const byId = (id) => books.find((b) => b.id === id);

  const shelves = [
    { id: 's1', name: 'books that destroyed me', count: 12, ids: ['al', 'be', 'no'], tone: 'inverse' },
    { id: 's2', name: 'comfort reads', count: 8, ids: ['no', 'cr', 'pi'], tone: 'paper' },
    { id: 's3', name: 'dark academia shelf', count: 14, ids: ['sh', 'ba', 'ci'], tone: 'paper' },
    { id: 's4', name: 'books that feel like rain', count: 6, ids: ['no', 'be', 'pr'], tone: 'inverse' },
  ];

  const profile = {
    name: 'Wren Adler',
    handle: '@wrenreads',
    bio: 'Reader of doomed academics & quiet magic. I keep the books that keep me.',
    booksThisYear: 47,
    moods: 9,
    streak: 23,
    aura: ['var(--emo-longing)', 'var(--emo-wonder)', 'var(--emo-eerie)', 'var(--emo-joy)'],
    auraWord: 'Longing',
  };

  const themes = [
    { id: 'dark-academia', name: 'Dark Academia Library', price: 'Premium', sub: 'Candlelight, leather, oxblood & gold' },
    { id: 'cozy-cottage', name: 'Cozy Cottage Shelf', price: 'Premium', sub: 'Soft cream, sage & warm linen' },
    { id: 'gothic-romance', name: 'Gothic Romance', price: 'Premium', sub: 'Ink black, oxblood & dramatic gold' },
    { id: 'japanese-minimal', name: 'Japanese Minimal Library', price: 'Free', sub: 'Paper white, sumi ink, vermilion' },
    { id: 'witchy', name: 'Witchy Reading Room', price: 'Premium', sub: 'Deep plum, moss & moonlight' },
  ];

  const vibes = [
    { id: 'da', label: 'Dark Academia', emo: 'eerie', line: 'candlelight & doomed brilliance' },
    { id: 'co', label: 'Cozy & Comforting', emo: 'comfort', line: 'tea, rain, a blanket' },
    { id: 'ro', label: 'Hopeless Romantic', emo: 'tender', line: 'yearning above all' },
    { id: 'wo', label: 'Wonder & Magic', emo: 'wonder', line: 'worlds that glow' },
    { id: 'me', label: 'Beautifully Sad', emo: 'heartbreak', line: 'books that wreck me' },
    { id: 'un', label: 'Unhinged & Weird', emo: 'rage', line: 'feral little stories' },
  ];

  return { books, byId, shelves, profile, themes, vibes };
})();
