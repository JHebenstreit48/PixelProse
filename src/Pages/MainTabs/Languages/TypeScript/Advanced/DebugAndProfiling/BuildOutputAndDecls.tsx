import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildOutputAndDecls = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/DebugAndProfiling/BuildOutputAndDecls';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build Output & Decls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildOutputAndDecls;
