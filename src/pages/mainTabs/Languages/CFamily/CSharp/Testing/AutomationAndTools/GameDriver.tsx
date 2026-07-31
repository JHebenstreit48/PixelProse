import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GameDriver = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/AutomationAndTools/GameDriver';

  return (
    <>
      <PageLayout>
        <PageTitle title="GameDriver" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameDriver;
