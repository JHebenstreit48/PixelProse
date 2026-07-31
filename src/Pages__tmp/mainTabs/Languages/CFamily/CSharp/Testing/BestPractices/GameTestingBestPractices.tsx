import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const GameTestingBestPractices = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/BestPractices/GameTestingBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Game Testing Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameTestingBestPractices;
