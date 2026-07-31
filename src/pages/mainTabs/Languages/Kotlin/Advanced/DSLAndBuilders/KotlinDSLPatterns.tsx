import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KotlinDSLPatterns = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/DSLAndBuilders/KotlinDSLPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Kotlin DSL Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KotlinDSLPatterns;
