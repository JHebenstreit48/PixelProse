import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SeededRNGPatterns = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Determinism/SeededRNGPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Seeded RNG Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeededRNGPatterns;
