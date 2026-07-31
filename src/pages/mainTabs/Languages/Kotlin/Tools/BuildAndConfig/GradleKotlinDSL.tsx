import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GradleKotlinDSL = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/BuildAndConfig/GradleKotlinDSL';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gradle Kotlin DSL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GradleKotlinDSL;
