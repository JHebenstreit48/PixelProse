import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const GameDevelopmentBestPractices = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GameDevelopmentBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Game Development Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameDevelopmentBestPractices;
