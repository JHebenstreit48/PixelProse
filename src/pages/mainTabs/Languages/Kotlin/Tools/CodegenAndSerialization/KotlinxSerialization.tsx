import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const KotlinxSerialization = () => {
  const markdownFilePath = 'Languages/Kotlin/Tools/CodegenAndSerialization/KotlinxSerialization';

  return (
    <>
      <PageLayout>
        <PageTitle title="kotlinx.serialization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default KotlinxSerialization;
