import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
