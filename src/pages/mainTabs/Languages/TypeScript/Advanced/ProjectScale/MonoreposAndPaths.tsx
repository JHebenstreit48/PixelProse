import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MonoreposAndPaths = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/ProjectScale/MonoreposAndPaths';

  return (
    <>
      <PageLayout>
        <PageTitle title="Monorepos & Paths" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MonoreposAndPaths;
