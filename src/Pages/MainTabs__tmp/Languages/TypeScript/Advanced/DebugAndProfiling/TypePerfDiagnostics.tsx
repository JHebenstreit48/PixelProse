import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TypePerfDiagnostics = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/DebugAndProfiling/TypePerfDiagnostics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Type Perf Diagnostics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypePerfDiagnostics;
