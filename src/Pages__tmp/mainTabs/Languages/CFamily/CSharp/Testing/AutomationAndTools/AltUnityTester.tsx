import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
