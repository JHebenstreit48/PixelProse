import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildOutputAndDecls = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/DebugAndProfiling/BuildOutputAndDecls';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Output & Decls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildOutputAndDecls;
