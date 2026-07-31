import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const JITAndEscapeAnalysis = () => {
  const markdownFilePath = 'Languages/Java/Advanced/Performance/JITAndEscapeAnalysis';

  return (
    <>
      <PageLayout>
        <PageTitle title="JIT & Escape Analysis" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JITAndEscapeAnalysis;
