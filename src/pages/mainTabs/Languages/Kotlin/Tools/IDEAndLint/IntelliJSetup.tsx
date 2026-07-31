import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
