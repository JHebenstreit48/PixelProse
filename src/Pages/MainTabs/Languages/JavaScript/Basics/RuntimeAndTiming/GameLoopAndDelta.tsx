import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameLoopAndDelta = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/RuntimeAndTiming/GameLoopAndDelta';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Game Loop & Delta" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameLoopAndDelta;
