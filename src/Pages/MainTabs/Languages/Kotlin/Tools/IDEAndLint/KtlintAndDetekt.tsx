import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const KtlintAndDetekt = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/IDEAndLint/KtlintAndDetekt';

  return (
    <>
      <PageLayout>
        <PageTitle title="ktlint & detekt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KtlintAndDetekt;
