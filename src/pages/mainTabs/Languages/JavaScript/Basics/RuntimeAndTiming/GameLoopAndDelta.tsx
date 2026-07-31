import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GameLoopAndDelta = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/RuntimeAndTiming/GameLoopAndDelta';

  return (
    <>
      <PageLayout>
        <PageTitle title="Game Loop & Delta" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameLoopAndDelta;
