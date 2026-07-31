import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
