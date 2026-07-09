import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
