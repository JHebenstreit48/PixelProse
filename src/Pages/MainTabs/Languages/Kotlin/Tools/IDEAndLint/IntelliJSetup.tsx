import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const IntelliJSetup = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/IDEAndLint/IntelliJSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="IntelliJ Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntelliJSetup;
