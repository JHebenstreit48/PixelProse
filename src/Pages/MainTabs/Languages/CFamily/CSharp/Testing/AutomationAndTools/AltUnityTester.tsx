import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AltUnityTester = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/AutomationAndTools/AltUnityTester';

  return (
    <>
      <PageLayout>
        <PageTitle title="AltUnity Tester" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AltUnityTester;
