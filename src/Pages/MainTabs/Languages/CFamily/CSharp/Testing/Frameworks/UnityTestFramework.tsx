import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnityTestFramework = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/Frameworks/UnityTestFramework';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Unity Test Framework" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnityTestFramework;
