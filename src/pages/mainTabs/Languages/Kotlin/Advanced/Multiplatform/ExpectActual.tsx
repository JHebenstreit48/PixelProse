import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ExpectActual = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Multiplatform/ExpectActual';

  return (
    <>
      <PageLayout>
        <PageTitle title="expect/actual" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExpectActual;
