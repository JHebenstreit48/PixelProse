import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NumbersAndMath = () => {
  const markdownFilePath = 'Languages/Lua/Basics/DataAndStructures/NumbersAndMath';

  return (
    <>
      <PageLayout>
        <PageTitle title="Numbers & Math" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NumbersAndMath;
