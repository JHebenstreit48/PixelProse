import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnityTestFramework = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/Frameworks/UnityTestFramework';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unity Test Framework" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnityTestFramework;
