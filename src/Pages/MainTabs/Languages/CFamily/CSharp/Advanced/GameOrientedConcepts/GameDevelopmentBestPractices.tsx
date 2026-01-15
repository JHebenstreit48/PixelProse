import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameDevelopmentBestPractices = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GameDevelopmentBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Game Development Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameDevelopmentBestPractices;
